import styled from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styled.rodape}>
			<div className={styled.rodape__informacoes}>
				<img src="/assets/images/logo-zn.png" alt="" className={styled.cabecalho__logo} />
				<ul className={styled.rodape__container}>
					<li className={styled.rodape__container__titulo}>Ajuda</li>
					<li className={styled.rodape__container_item}>Assistente Virtual</li>
					<li className={styled.rodape__container_item}>Acompanhe seu pedido</li>
					<li className={styled.rodape__container_item}>2ª via do boleto</li>
					<li className={styled.rodape__container_item}>Troca e Devolução</li>
				</ul>
				<ul className={styled.rodape__container}>
					<li className={styled.rodape__container__titulo}>Atendimento ao Cliente</li>
					<li className={styled.rodape__container_item}>Fale com a gente</li>
					<li className={styled.rodape__container_item}>Dúvidas Frequentes</li>
					<li className={styled.rodape__container_item}>Política Comercial</li>
					<li className={styled.rodape__container_item}>Código de defesa do consumidor</li>
				</ul>
				<ul className={styled.rodape__container}>
					<li className={styled.rodape__container__titulo}>Formas de Pagamento</li>
					<div className={styled.rodape__container__pagamentos}>
						<li>
							<img src="/assets/images/icons/ic-billet.svg" alt="" />
						</li>
						<li>
							<img src="/assets/images/icons/ic-amex.svg" alt="" />
						</li>
						<li>
							<img src="/assets/images/icons/ic-elo.svg" alt="" />
						</li>
						<li>
							<img src="/assets/images/icons/ic-hiperCard.svg" alt="" />
						</li>
						<li>
							<img src="/assets/images/icons/ic-visa.svg" alt="" />
						</li>
						<li>
							<img src="/assets/images/icons/ic-master.svg" alt="" />
						</li>
					</div>
					<li className={styled.rodape__container_item}>Cartão de Crédito</li>
					<li className={styled.rodape__container_item}>Pague em até 12x</li>
					<li className={styled.rodape__container_item}>Confira as condições</li>
					<li className={styled.rodape__container_item}>Boleto Bancário</li>
					<li className={styled.rodape__container_item}>Pague em até 6x</li>
					<li className={styled.rodape__container_item}>
						Aprovação de crédito sujeita à análise
					</li>
					<li className={styled.rodape__container_item}>Boleto Antecipado</li>
					<li className={styled.rodape__container_item}>
						À vista com 3% de desconto em produtos
					</li>
				</ul>
				<ul className={styled.rodape__container}>
					<li className={styled.rodape__container__titulo}>Nossas Redes</li>
					<div className={styled.rodape__container__redes}>
						<li>
							<a href="#">
								<img
									src="/assets/images/icons/icon-instagram.png"
									alt="Logo do Instagram"
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src="/assets/images/icons/icon-linkedin.png"
									alt="Logo do LinkedIn"
								/>
							</a>
						</li>
						<li>
							<a href="#">
								<img src="/assets/images/icons/icon-tiktok.png" alt="Logo do TikTok" />
							</a>
						</li>
						<li>
							<a href="#">
								<img
									src="/assets/images/icons/icon-twitter.png"
									alt="Logo do Twitter"
								/>
							</a>
						</li>
					</div>
				</ul>
			</div>
			<p className={styled.rodape__permissoes}>
				Copyright © 2023 - Todos os direitos reservados | www.zndental.com.br |
				ZN Dental | CNPJ: 00.000.000/0000-00 | Rua Dr. Olavo Egídio, 274 -
				Santana - São Paulo - CEP 02037-000 | Autorizações de Funcionamento
				ANVISA - Medicamentos: 0.00.000-0, Produtos para Saúde (Correlatos):
				0.00.000-0, 0.00.000-0, Saneantes Domissanitários: 0.00.000-0,
				Perfumes/Produtos de Higiene/Cosméticos: 0.00.000-0 | CNPJ:
				00.000.000/0000-00 | Farmacêutica responsável: Pedro Pedreira Santos -
				CRF/SP nº 00.000 | CNPJ: 00.000/0000-17 | Política de Privacidade e
				Segurança - Fotos meramente ilustrativas - Os preços e condições da loja
				virtual estão sujeitos a alterações. Em caso de divergência de preços no
				site, o valor válido é o do Carrinho de Compra.
			</p>
		</footer>
	);
};

export default Footer;
