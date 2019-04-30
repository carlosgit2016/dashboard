package com.example.api.resource;

import java.net.URI;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.api.model.Pedido;
import com.example.api.repository.PedidoRepository;
import com.example.api.service.PedidoService;

@RestController
@RequestMapping("/pedidos")
public class PedidoResource {
	
	@Autowired
	private PedidoRepository pedidoRepository; 
	@Autowired
	private PedidoService pedidoService;
	
	@GetMapping
	public ResponseEntity<?> lista(){
		List<Pedido> pedidos = pedidoRepository.findAll();
		
		return !pedidos.isEmpty() ? ResponseEntity.ok(pedidos) : ResponseEntity.noContent().build();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Pedido> buscaPorId(@PathVariable Long id){
		Pedido pedido = pedidoRepository.findOne(id);
		
		return pedido != null ? ResponseEntity.ok(pedido) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Pedido> cria(@Valid @RequestBody Pedido pedido){
		Pedido pedidoCriado = pedidoRepository.save(pedido);
		
		URI uri = ServletUriComponentsBuilder.fromCurrentRequestUri().path("/{id}")
				.buildAndExpand(pedido.getId_pedido()).toUri();
		
		return ResponseEntity.created(uri).body(pedidoCriado);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Pedido> edita(@PathVariable Long id, @Valid @RequestBody Pedido pedido){
		Pedido pedidoEditado = pedidoService.atualiza(id, pedido);
		
		return ResponseEntity.ok(pedidoEditado);
	}
	
	/*
	@DeleteMapping("/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deleta(@PathVariable Long id) {
		pedidoRepository.delete(id);
	}
	*/
}
