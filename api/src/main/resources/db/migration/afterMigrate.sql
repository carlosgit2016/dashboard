INSERT INTO cliente (nome) VALUES ("Daniel Junior");
INSERT INTO cliente (nome) VALUES ("Petrobrás");
INSERT INTO cliente (nome) VALUES ("Pedreira Guaravera");
INSERT INTO cliente (nome) VALUES ("Kim Jong-un");

INSERT INTO tipo_veiculo (nome) VALUES ("Ferrovia");
INSERT INTO tipo_veiculo (nome) VALUES ("Portos e Terminais");
INSERT INTO tipo_veiculo (nome) VALUES ("Navegação");
INSERT INTO tipo_veiculo (nome) VALUES ("Estrada");

INSERT INTO veiculo (id_tipo_veiculo) VALUES (1);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (1);

INSERT INTO veiculo (id_tipo_veiculo) VALUES (2);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (2);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (2);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (2);

INSERT INTO veiculo (id_tipo_veiculo) VALUES (3);

INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);
INSERT INTO veiculo (id_tipo_veiculo) VALUES (4);

INSERT INTO minerio (nome, valor_grama) VALUES ("Ouro", 162.270820);
INSERT INTO minerio (nome, valor_grama) VALUES ("Alumínio", 228.148456);
INSERT INTO minerio (nome, valor_grama) VALUES ("Estanho", 2608.403753);
INSERT INTO minerio (nome, valor_grama) VALUES ("Níquel", 1588.236164);
INSERT INTO minerio (nome, valor_grama) VALUES ("Prata", 1.865462);
INSERT INTO minerio (nome, valor_grama) VALUES ("Zinco", 347.495358);
INSERT INTO minerio (nome, valor_grama) VALUES ("Chumbo", 249.515922);
INSERT INTO minerio (nome, valor_grama) VALUES ("Minério de ferro", 10.542909);
INSERT INTO minerio (nome, valor_grama) VALUES ("Urânio", 2.399496);
INSERT INTO minerio (nome, valor_grama) VALUES ("Cátodo de cobre grado A", 785.135211);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(7, 1, 1, "Londrina/PR", 1000);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(7, 2, 2, "Rua São Bento, 29 - Centro, Rio de Janeiro", 2014);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(10, 2, 4, "Rua São Bento, 29 - Centro, Rio de Janeiro", 50);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(12, 2, 7, "Rua São Bento, 29 - Centro, Rio de Janeiro", 2014);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(2, 1, 5, "Londrina/PR", 967);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(13, 1, 8, "Londrina/PR", 20);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(8, 1, 1, "Londrina/PR", 15);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(3, 4, 9, "Pyongyang 101", 380);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(4, 4, 9, "Pyongyang 101", 420);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(5, 4, 6, "Pyongyang 101", 39);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(3, 4, 9, "Pyongyang 101", 667);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(15, 3, 8, "SP/SP", 67);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(12, 3, 3, "SP/SP 101", 13);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(15, 3, 8, "SP/SP", 14);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(14, 3, 8, "SP/SP", 37);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(21, 3, 3, "SP/SP 101", 45);

INSERT INTO pedido (id_veiculo, id_cliente, id_minerio, destino, quantidade_kg) VALUES 
(19, 3, 10, "SP/SP 101", 51);

