package com.example.CV3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.mybatis.spring.annotation.MapperScan;
@SpringBootApplication
@MapperScan("com.example.CV3.repository")
public class Cv3Application {

	public static void main(String[] args) {
		SpringApplication.run(Cv3Application.class, args);
	}

}
