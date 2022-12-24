package br.com.banco.api.assembler;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.server.mvc.RepresentationModelAssemblerSupport;
import org.springframework.stereotype.Component;

import br.com.banco.api.controller.TransferenciaController;
import br.com.banco.api.hypermedia.BancoLinks;
import br.com.banco.api.model.TransferenciaModel;
import br.com.banco.domain.model.Transferencia;

@Component
public class TransferenciaModelAssembler 
	extends RepresentationModelAssemblerSupport<Transferencia, TransferenciaModel>{
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Autowired
	private BancoLinks bancoLinks;
	
	public TransferenciaModelAssembler() {
		super(TransferenciaController.class, TransferenciaModel.class);
	}
	
	@Override
	public TransferenciaModel toModel(Transferencia transferencia) {
		return modelMapper.map(transferencia, TransferenciaModel.class);
	}
	
	@Override
	public CollectionModel<TransferenciaModel> toCollectionModel(Iterable<? extends Transferencia> entities){
		return super.toCollectionModel(entities)
				.add(bancoLinks.linkToTransferencias());
	}
}
