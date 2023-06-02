import React from "react";
import Counter from '../componentes/animations/Counter.js';


const HomePage = (props) => {
    return (
        <main className="holder">
            <section>
                <h2>Contribuímos ao acesso da população à saúde através da
                    convivência e integração entre as estruturas públicas,
                    privadas e o terceiro setor, visando uma assistência com
                    maior qualidade e eficiência.
                </h2>
            </section>
            <hr />
            <div className="fila">
                <div className="columna33">
                    <img src="img/tecnologia_inovadora.png" alt="foto_teleconsulta" />
                    {/* <h3>Tecnologia inovadora</h3> */}
                    <p>Novas tecnologias para solucionar de forma inovadora e escalável desafios de prevenção e promoção à saúde.</p>
                    <a>Teleconsulta</a><br />
                    <a>Política Privacidade dados</a>
                </div>
                <div className="columna33">
                    <img src="img/projetos_subprojetos.png" alt="projetos_subprojetos" />
                    {/* <h3>Projetos e Sub-projetos</h3> */}
                    <p>Cuidando do meu diabetes com uma pequena ajuda dos meus amigos.</p>
                    <a>Projetos e Sub-projetos</a><br />
                    <a href="/stakeholders">Stakeholders</a>
                </div>
                <div className="columna33">
                    <img src="img/gestao_cuidado.png" alt="gestao_cuidado" />
                    {/* <h3>Gestão do cuidado</h3> */}
                    <p>Uma adequada GESTÃO da doença como forma para manter o sistema funcionando em harmonia.</p>
                    <a>Gestão gcdc</a><br />
                    <a>Atualizações</a><br />
                    <a>Transparencia</a>
                </div>
            </div>
            <section className="resumenes">
                <div className="fila resumen">
                    <div className="columna67">
                        <p>
                            A Associação “TAMO JUNTO NO DIABETES” (TMJND) integra o 3º Setor (Organizações da Sociedade Civil - OSC) e foi
                            criada em XXXX 2022 com o intuito de fortalecer PARCERIAS entre o Setor Privado, Governo (SUS) e 3º Setor para
                            acompanhar a cada um de nossos associados diabéticos através da <span className="negrita">GESTÃO DE CUIDADO</span>
                            que aumenta a probabilidade de o paciente FAZER O QUE PRECISA FAZER.
                            Existem no Brasil um número aproximado de 150 associações de diabéticos, todas elas orientadas a fornecer ajuda
                            aos pacientes e familiares através sobretudo de informações específicas sobre a doença, mutirões assistenciais,
                            facilidades de acesso a produtos, exames e consultas profissionais, etc.
                            A TMJND através dos seus <span className="negrita"><a href="/">PROJETOS</a></span> quer ir além desses benefícios, e
                            incorporar a <span className="negrita"><a href="/">GESTÃO</a></span> e <span className="negrita">ACOMPANHAMENTO MÉDICO INDIVIDUAL LONGITUDINAL</span>
                            (ao longo do tempo), usando indicadores de saúde que permitam um melhor controle da doença e melhores condições
                            sociais e de vida dos pacientes e suas famílias, para minimizar as complicações de curto, mediano e longo prazo,
                            objetivando considerável diminuição de custos e despesas médicas. <span className="negrita"><a href="/nos">SAIBA MAIS...</a></span>
                        </p>
                    </div>
                    <div className="columna33">
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                    </div>

                </div>

                <div className="fila resumen">
                    <div className="columna67">
                        <p>
                            Nos últimos 10 anos no Brasil houve um aumento de quase 30% no número de Diabéticos, com atualmente quase 17 milhões
                            de Diabéticos adultos (20 a 79 anos). Estima-se que aproximadamente 10% da população geral é diabética, porém a
                            metade não sabe ainda que tem a doença.
                            O Diabetes Mellitus é uma doença <span className="negrita">crónica e silenciosa</span>, que não pode ser curada mas sim <span className="negrita">GERENCIADA</span>.
                            O gerenciamento envolve o <span className="negrita">CUIDADO LONGITUDINAL</span> (ao longo do tempo) visando um melhor controle da doença para prevenir ou retardar
                            suas graves e custosas complicações: Retinopatia diabética (cegueira), Nefropatia diabética (hemodiálise),
                            Angiopatia diabética (amputações, infarto, AVC), neuropatia diabética (dores crónicas incapacitantes).
                            O Projeto Geral <span className="negrita">“Cuidando do meu diabetes (com uma pequena ajuda dos meus amigos)”</span> da TAMO JUNTO NO DIABETES
                            visa garantir a longitudinalidade da atenção primária, e apresenta-se como uma alternativa tanto válida quanto
                            futurista, para o fortalecimento da Atenção Primária da Saúde (APS), com urgência, melhorando as ações de prevenção
                            e promoção em saúde, fortalecendo parcerias multisetoriais, investindo na educação em diabetes para a população e
                            para profissionais de saúde, e fortalecendo a linha de comunicação entre o SUS e sociedade civil, em conexão com
                            a Agenda 2030 da Organização Mundial da Saúde. <span className="negrita"><a href="/">SAIBA MAIS...</a></span>
                        </p>
                    </div>
                    <div className="columna33">
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                    </div>

                </div>
            </section>

            <div className="socios">
                <Counter />
            </div>
            <hr />
            <section>
                <h2>NOSSOS PARCEIROS</h2>
                <div className="fila">
                    <div className="columna100 socios">
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                        <img src="https://via.placeholder.com/150" alt="foto_noticias" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;