import React from "react";
import Counter from '../componentes/animations/Counter.js';


const HomePage = (props) => {
    return (
        <main className="holder">
            <section>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga nam eos officia quod! Fuga quas rem reprehenderit ducimus aut ad, explicabo labore tenetur ea necessitatibus, voluptatibus officiis hic dolore doloremque.
                </h2>
            </section>
            <hr />
            <div className="fila">
                <div className="columna33">
                    <img src="img/5g.jpeg" alt="imagen" />
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio nobis totam deleniti cumque adipisci illum optio aliquam magnam ullam facilis omnis, neque ad molestiae quasi odit earum nulla rerum impedit.</p>
                    <a href="/contacto">Lorem, ipsum.</a>
                </div>
                <div className="columna33">
                    <img src="https://via.placeholder.com/360x200" alt="imagen" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor odio neque, nesciunt animi eaque tenetur aperiam cupiditate beatae iure consequatur vitae quidem maiores? Magni expedita provident repudiandae saepe. Asperiores, placeat.
                        <br></br>
                        <br></br>
                    </p>
                    <a href="/que-hacemos">¿Qué Hacemos?</a>
                </div>
                <div className="columna33">
                    <img src="https://via.placeholder.com/360x200" alt="imagen" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum harum quos optio voluptatibus. Temporibus illo quaerat fugiat doloribus eius, commodi sint, amet provident qui dignissimos ipsum illum sapiente voluptatibus.</p>
                    <a href="/quienes-somos">¿Quienes Somos?</a>
                </div>
            </div>
            <section className="resumenes">
                <div className="fila resumen">
                    <div className="columna67">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum enim tenetur optio? Ipsam, reiciendis iste nisi unde velit ratione quasi cumque pariatur, eius natus voluptates omnis dolor repudiandae dolorum 
                            <br></br>
                            <br></br>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni minima facere veniam perferendis, dolores 
                            <br></br>
                            <br></br>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, unde? <span className="negrita"><a href="/articulos">Artículos</a></span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolorem quisquam in exercitationem, totam, tempora maxime nisi ea ut eveniet error voluptatibus voluptate debitis assumenda odit, ad eos atque. Vitae?
                            incorporar a <span className="negrita"><a href="/contacto">CONTACTO</a></span> e <span className="negrita">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, perferendis.</span> Lorem, ipsum dolor sit molestiae quod in beatae consequatur deserunt fugiat voluptatem sed id, doloremque accusantium repellat iu <a className="saibamais" href="/quienes-somos">¿Quienes Somos?</a>
                        </p>
                    </div>
                    <div className="columna33">
                        <img src="https://via.placeholder.com/150x100" alt="imagen" />
                    </div>

                </div>

                <div className="fila resumen">
                    <div className="columna67">
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere velit mollitia odio non ab hic, laborum blanditiis quibusdam, esse perspiciatis, laudantium sunt numquam. Ipsam explicabo obcaecati expedita, harum et magnam rerum laborum ducimus unde assumenda, hic optio. Fugiat vitae aliquid, maxime distinctio assumenda delectus ipsam mollitia asperiores voluptates maiores nostrum vel recusandae tempora culpa odio sunt amet molestiae, sapiente dolorem corporis placeat consequuntur nulla et. Ipsum quo non magnam dolores ad illum cum, necessitatibus ab dignissimos autem eligendi, laborum nemo? Tempora soluta doloremque at fugit mollitia? Qui, debitis! Magni vel harum dicta ea iste consectetur ab vero quis. Cupiditate laborum, laboriosam doloremque eos delectus quisquam! Pariatur veniam doloremque odio quam commodi. Libero, laborum ea labore eius dolores ad quae reprehenderit quasi perspiciatis perferendis enim totam obcaecati odio optio quo harum aperiam voluptas beatae, praesentium corrupti nemo, quam quis? Dolor itaque cupiditate eaque deleniti doloribus hic illum, officia, modi accusamus veniam ratione quidem nostrum fuga id ad? Illo consequuntur excepturi 
                        </p>
                    </div>
                    <div className="columna33">
                        <img src="https://via.placeholder.com/150x100" alt="imagen" />
                    </div>

                </div>
            </section>

            <div className="socios">
                <Counter />
            </div>
            <hr />
            <section>
                <h2>Lorem, ipsum dolor.</h2>
                <div className="fila">
                    <div className="columna100 socios">
                        <img src="https://via.placeholder.com/150" alt="socio" />
                        <img src="https://via.placeholder.com/150" alt="socio" />
                        <img src="https://via.placeholder.com/150" alt="socio" />
                        <img src="https://via.placeholder.com/150" alt="socio" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default HomePage;