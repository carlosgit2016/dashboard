package com.example.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.example.api.model.Pedido;
import com.example.api.repository.PedidoRepository;

@Service
public class PedidoService {

	@Autowired
	private PedidoRepository pedidoRepository;
	
	
	public Pedido atualiza(Long id, Pedido pedido) {
		Pedido pedidoOriginal = buscaPorId(id);
		
		BeanUtils.copyProperties(pedido, pedidoOriginal, "id_pedido");
		
		return pedidoRepository.save(pedidoOriginal);
	}
	
	public Pedido buscaPorId(Long id) {
		Pedido pedidoEncontrado = pedidoRepository.findOne(id);
		if(pedidoEncontrado == null) {
			throw new EmptyResultDataAccessException(1);
		}
		
		return pedidoEncontrado;
	}
}
