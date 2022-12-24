package br.com.banco.api.exceptionhandler;

import lombok.Getter;

@Getter
public enum ProblemType {

	PARAMETRO_INVALIDO("/parametro-invalido", "Parâmetro Inválido");
	
	private String title;
	private String uri;
	
	ProblemType(String path, String title) {
		this.uri = "https://github.com/Fa2bio/Desafio-5" + path;
		this.title = title;
	}
}
