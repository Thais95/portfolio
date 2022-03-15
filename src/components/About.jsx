function About () {
    return (
        <section id="about">
            <div id="about-container">
                <div id="line">
                <div id="button-container">
                    <h4>Sobre Mim</h4>
                    <span className="button-group"><a href="mailto:thaiscdaraujo95@gmail.com" className="button-link" >
                    <button className="button-style-1"><img src="/img/mail.svg" alt="ícone de email" />
                        <span>Email</span>
                    </button>
                </a>
                <a href="/curriculum/curriculo-thais-araujo.pdf" target="_blank" rel="noreferrer" className="button-link" >
                    <button className="button-style-1"><img src="/img/download-cloud.svg" alt="ícone de download" />
                        <span>Currículo</span>
                    </button>
                </a></span></div>
                <p id="local">Rio de Janeiro, Brasil</p>
                </div>
                
                <p id="about-text">
                Estudante no primeiro período de Análise e Desenvolvimento de Sistemas, na faculdade UniCesumar.
                <br />                
                Entrei na área de tecnologia em 2021 como autodidata, me encontrei em TI e desde então venho me dedicando.
                <br />                
                Adoro interface do usuário e sou focada em front-end, tenho experiência com UI Design e estou aprendendo UX.
                <br /> 
                Também possuo inglês avançado.
                </p>
                
            </div>
        </section>
    )
}

export default About;