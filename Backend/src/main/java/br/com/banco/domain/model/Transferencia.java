package br.com.banco.domain.model;

import java.math.BigDecimal;
import java.time.OffsetDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
public class Transferencia {

	@Id
	@EqualsAndHashCode.Include
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "data_transferencia")
	private OffsetDateTime dataTransferencia;
	
	@Column(name = "valor")
	private BigDecimal valor;
	
	@Enumerated(EnumType.STRING)
	private TransferenciaTipo tipo;
	
	@Column(name = "nome_operador_transacao")
	private String nomeOperador;
	
	@ManyToOne
	@JoinColumn(name = "conta_id", nullable = false)
	private Conta conta;
}
