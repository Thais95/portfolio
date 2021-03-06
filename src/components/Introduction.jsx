function Introduction () {
    return ( 
        <section id="introduction">
            <div id="introduction-container">
            <div id="introduction-text">
                <h2>Prazer! Me chamo</h2>
                <h1>Thaís Araujo</h1>
                <h3>Desenvolvedora Front-end & UI Designer</h3>
                <span className="button-group">
                <a href="https://github.com/Thais95" target="_blank" rel="noreferrer" className="button-link" >
                    <button className="button-style hover-glow"><img src="/img/github.svg" alt="ícone do github" />
                        <span>GitHub</span>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/thaiscdaraujo/" target="_blank" rel="noreferrer" className="button-link" >
                    <button className="button-style hover-glow"><img src="/img/linkedin.svg" alt="ícone do linkedin" />
                        <span>LinkedIn</span>
                    </button>
                </a>
                </span>
            </div>
            </div>
        </section>
     );
}

export default Introduction;