package br.com.banco.api.model;

import java.math.BigDecimal;
import java.time.OffsetDateTime;

import org.springframework.hateoas.RepresentationModel;

import br.com.banco.domain.model.TransferenciaTipo;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class TransferenciaModel extends RepresentationModel<TransferenciaModel>{

	private OffsetDateTime dataTransferencia;
	
	private BigDecimal valor;
	
	private TransferenciaTipo tipo;
	
	private String nomeOperador;
}
