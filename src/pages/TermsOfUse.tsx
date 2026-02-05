const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-semibold mb-8 text-coral">
          Termos de Uso
        </h1>
        
        <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
          <p className="text-foreground">
            <strong>Última atualização:</strong> 05 de Fevereiro de 2026
          </p>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              1. Aceitação dos Termos
            </h2>
            <p>
              Ao acessar e utilizar o site da Cheiro de Rosa (CNPJ: 36.312.574/0001-42), você concorda 
              em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer 
              parte destes termos, não utilize nosso site.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              2. Elegibilidade
            </h2>
            <p>
              <strong>IMPORTANTE:</strong> Nossos produtos são destinados exclusivamente a maiores de 
              18 anos. Ao utilizar nosso site e realizar compras, você declara ter pelo menos 18 anos 
              de idade.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              3. Produtos e Serviços
            </h2>
            <p>
              A Cheiro de Rosa comercializa produtos íntimos e lingerie. Nos reservamos o direito de:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Modificar ou descontinuar produtos sem aviso prévio</li>
              <li>Limitar quantidades de compra</li>
              <li>Recusar pedidos a nosso critério</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              4. Preços e Pagamentos
            </h2>
            <p>
              Os preços são informados via WhatsApp e podem ser alterados sem aviso prévio. 
              Aceitamos diversas formas de pagamento, que serão informadas durante o atendimento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              5. Entrega
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Realizamos entregas na Grande Florianópolis</li>
              <li>Entrega no mesmo dia disponível (consulte horários)</li>
              <li>Todas as embalagens são 100% discretas e sem identificação</li>
              <li>O prazo de entrega será informado no momento da compra</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              6. Trocas e Devoluções
            </h2>
            <p>
              Por questões de higiene e segurança, produtos íntimos não podem ser trocados ou 
              devolvidos após abertos. Em caso de defeito de fabricação, entre em contato em até 
              7 dias após o recebimento.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              7. Privacidade e Discrição
            </h2>
            <p>
              Garantimos total sigilo em todas as etapas da compra. Suas informações são protegidas 
              conforme nossa <a href="/privacidade" className="text-coral hover:text-coral-light">Política de Privacidade</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              8. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteúdo deste site, incluindo textos, imagens, logotipos e design, é propriedade 
              da Cheiro de Rosa e está protegido por leis de direitos autorais.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              9. Limitação de Responsabilidade
            </h2>
            <p>
              A Cheiro de Rosa não se responsabiliza por danos indiretos decorrentes do uso de nossos 
              produtos. O uso dos produtos é de responsabilidade exclusiva do comprador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              10. Contato
            </h2>
            <ul className="list-none space-y-1">
              <li><strong>WhatsApp:</strong> (48) 98804-8880</li>
              <li><strong>Razão Social:</strong> Cheiro de Rosa Lingerie</li>
              <li><strong>CNPJ:</strong> 36.312.574/0001-42</li>
              <li><strong>Localização:</strong> Grande Florianópolis, SC</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              11. Legislação Aplicável
            </h2>
            <p>
              Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida no 
              foro da comarca de Florianópolis, SC.
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <a 
            href="/" 
            className="text-coral hover:text-coral-light transition-colors font-body"
          >
            ← Voltar para a página inicial
          </a>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
