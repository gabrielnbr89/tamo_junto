import React from "react";

const StakeholdersPage = (props) => {
    return (
        <main className="holder">
            {/* <h2>STAKEHOLDERS</h2> */}
            <hr />
            <div className="stakeholder_card">
                <img src="img/maos.png" alt="maos" />
                <div className="stakeholder_info">
                    <h3>STAKEHOLDERS</h3>
                    <p>
                        Stakeholders significa público estratégico e descreve todas as pessoas ou
                        "grupo de interesse" que são impactados pelas ações de um empreendimento,
                        projeto, empresa ou negócio. Em inglês stake significa interesse,
                        participação , risco. Holder significa aquele que possui. Assim, stakeholder
                        também significa parte interessada ou interveniente.
                    </p>
                    <p className="comentario">
                        São os stakeholders que legitimam as ações de uma organização  e tem um papel
                        de influência para a gestão e os resultados dessa mesma organização.
                    </p>
                </div>
            </div>

            <div className="stakeholder_card">
                <img src="img/maos_dotores.png" alt="maos_dotores" />
                <div className="stakeholder_info">
                    <h3>MODELO DE RESPONSABILIDADE SOCIAL</h3>
                    <p>
                        Na TMJND entendemos a importância dos stakeholders (pessoas ou empresas que
                        estejam relacionadas com o projeto) onde a TMJND é vista como uma organização
                        social que deve trazer algum tipo de benefício a todas as pessoas envolvidas
                        no processo. Modelo de responsabilidade social que dá valor à vertente social
                        e retributiva, visando um equilíbrio social.
                    </p>
                </div>
            </div>

            <div className="stakeholder_card">
                <img src="img/bonecos.png" alt="bonecos" />
                <div className="stakeholder_info">
                    <h3>SOLIDARIDADE EM AÇÃO</h3>
                    <p>
                        O princípio pelo qual a Associação “TAMO JUNTO NO DIABETES” foi idealizada e
                        criada, e que rege toda a sua atuação em todos os âmbitos, é o princípio da
                        SOLIDARIEDADE: acreditamos que o esforço organizado de todos os atores
                        comprometidos (Tamo Junto!!) vai potencializar o resultado esperado, de tal
                        maneira que tanto aqueles que solidariamente oferecem seus recursos e habilidades
                        (empresas de capital privado, médicos, profissionais da saúde, laboratórios, farmácias,
                        etc.), quanto estes (associados) que recebem os benefícios do CUIDADO CONTINUO e
                        respondem através de mudanças de hábitos e comportamentos para um melhor controle
                        da doença, contribuem para criar uma sociedade com mais harmonia baseada nesse
                        princípio de Solidariedade mútua.
                    </p>
                </div>
            </div>

            <div className="stakeholder_card">
                <img src="" alt="mapa" />
                <div className="stakeholder_info">
                    <h3>MAPA DE STAKEHOLDERS</h3>
                    <p>
                        É uma ferramenta capaz de auxiliar e entender melhor quem são as 
                        partes interessadas em seu projeto.
                    </p>
                </div>
            </div>

        </main>
    );
}

export default StakeholdersPage;