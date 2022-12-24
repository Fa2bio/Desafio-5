package br.com.banco;

import java.util.TimeZone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BancoApplication {

    public static void main(String[] args) {
    	TimeZone.setDefault(TimeZone.getTimeZone("GMT+3"));
        SpringApplication.run(BancoApplication.class, args);
    }
}
