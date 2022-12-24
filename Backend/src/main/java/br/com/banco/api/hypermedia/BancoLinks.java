package br.com.banco.api.hypermedia;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;

import org.springframework.hateoas.IanaLinkRelations;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.LinkRelation;
import org.springframework.hateoas.TemplateVariable;
import org.springframework.hateoas.TemplateVariable.VariableType;
import org.springframework.hateoas.TemplateVariables;
import org.springframework.hateoas.UriTemplate;
import org.springframework.stereotype.Component;

import br.com.banco.api.controller.TransferenciaController;


@Component
public class BancoLinks {

	public Link linkToTransferencias(String rel) {
		
		TemplateVariables filterVariables = new TemplateVariables(
				new TemplateVariable("contaId", VariableType.REQUEST_PARAM),
				new TemplateVariable("dataCriacaoInicio", VariableType.REQUEST_PARAM),
				new TemplateVariable("dataCriacaoFim", VariableType.REQUEST_PARAM),
				new TemplateVariable("nomeOperador", VariableType.REQUEST_PARAM));
		
		String url = linkTo(methodOn(TransferenciaController.class)
				.pesquisar(null))
				.toUri().toString();
		return new LinkModel(UriTemplate.of(url, filterVariables), LinkRelation.of(rel));
	}
	
	public Link linkToTransferencias() {
		return linkToTransferencias(IanaLinkRelations.SELF.value());
	}
	
	private static class LinkModel extends Link  {

		private static final long serialVersionUID = 1L;

		public LinkModel(UriTemplate of, LinkRelation of2) {
			super(of, of2);
		}
	}
	
}