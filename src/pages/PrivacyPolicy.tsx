const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-3xl md:text-4xl font-semibold mb-8 text-coral">
          Política de Privacidade
        </h1>
        
        <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
          <p className="text-foreground">
            <strong>Última atualização:</strong> 05 de Fevereiro de 2026
          </p>

          <section>
          <h2 className="font-display text-xl font-semibold text-foreground mb-3">
            1. Informações que Coletamos
          </h2>
          <p>
            A Cheiro de Rosa Lingerie (CNPJ: 36.312.574/0001-42) coleta informações que você nos fornece diretamente,
              como nome, telefone e endereço de entrega quando entra em contato conosco via WhatsApp para 
              realizar uma compra.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              2. Como Usamos suas Informações
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Processar e entregar seus pedidos</li>
              <li>Enviar atualizações sobre seu pedido</li>
              <li>Responder suas dúvidas e solicitações</li>
              <li>Melhorar nossos produtos e serviços</li>
              <li>Cumprir obrigações legais</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              3. Compartilhamento de Dados
            </h2>
            <p>
              Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para 
              fins de marketing. Podemos compartilhar dados apenas com:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Serviços de entrega para realizar o envio do seu pedido</li>
              <li>Autoridades legais quando exigido por lei</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              4. Proteção de Dados
            </h2>
            <p>
              Implementamos medidas de segurança para proteger suas informações contra acesso não 
              autorizado, alteração ou destruição. Todas as conversas via WhatsApp são criptografadas 
              de ponta a ponta.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              5. Cookies e Tecnologias de Rastreamento
            </h2>
            <p>
              Utilizamos cookies e tecnologias similares (incluindo o Meta Pixel) para:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Analisar o tráfego do site</li>
              <li>Melhorar a experiência do usuário</li>
              <li>Medir a eficácia de nossas campanhas publicitárias</li>
            </ul>
            <p className="mt-2">
              Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              6. Seus Direitos (LGPD)
            </h2>
            <p>
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:
            </p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li>Acessar seus dados pessoais</li>
              <li>Corrigir dados incompletos ou desatualizados</li>
              <li>Solicitar a exclusão de seus dados</li>
              <li>Revogar seu consentimento a qualquer momento</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              7. Contato
            </h2>
            <p>
              Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em contato:
            </p>
            <ul className="list-none space-y-1 mt-2">
              <li><strong>WhatsApp:</strong> (48) 98804-8880</li>
              <li><strong>Razão Social:</strong> Cheiro de Rosa Lingerie</li>
              <li><strong>CNPJ:</strong> 36.312.574/0001-42</li>
              <li><strong>Localização:</strong> Grande Florianópolis, SC</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">
              8. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta política periodicamente. Recomendamos que você revise esta página 
              regularmente para estar ciente de quaisquer mudanças.
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

export default PrivacyPolicy;
