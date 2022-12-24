package br.com.banco.infrastructure.repository.spec;

import java.util.ArrayList;

import javax.persistence.criteria.Predicate;

import org.springframework.data.jpa.domain.Specification;

import br.com.banco.domain.filter.TransferenciaFiltro;
import br.com.banco.domain.model.Transferencia;

public class TransferenciaSpecs {

	public static Specification<Transferencia> usandoFiltro(TransferenciaFiltro filtro){
		return (root, query, builder) -> {
			var predicates = new ArrayList<Predicate>();
			
			if(Transferencia.class.equals(query.getResultType())) {
				root.fetch("conta");
			}
			
			if(filtro.getContaId() != null) {
				predicates.add(builder.equal(root.get("conta"), filtro.getContaId()));
			}
				
			if(filtro.getDataCriacaoInicio() != null) {
				predicates.add(builder.greaterThanOrEqualTo(root.get("dataTransferencia"), filtro.getDataCriacaoInicio()));
			}
			
			if(filtro.getDataCriacaoFim() != null) {
				predicates.add(builder.lessThanOrEqualTo(root.get("dataTransferencia"), filtro.getDataCriacaoFim()));
			}
			
			if(filtro.getNomeOperador() != null && !filtro.getNomeOperador().equals("")) {
				predicates.add(builder.equal(root.get("nomeOperador"), filtro.getNomeOperador()));
			}
			
			return builder.and(predicates.toArray(new Predicate[0]));
		};
	}
}
