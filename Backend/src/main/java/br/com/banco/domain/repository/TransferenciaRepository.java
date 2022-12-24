package br.com.banco.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import br.com.banco.domain.model.Transferencia;

public interface TransferenciaRepository 
	extends JpaRepository<Transferencia, Long>, JpaSpecificationExecutor<Transferencia>{

}
