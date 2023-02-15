import './home.css'
import React from 'react'
import { Link } from 'react-router-dom'



function HomeComponent () {

  return (
    <div className=' homecomponent'>

      <div className="row">
          <div className="col-12">
            <h2> Avec ADOPTE1ETUDIANT adopter un etudiant<br/> en quelques etapes tres simples</h2>
          </div>
      </div>

      <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div className="row bloc-produit">
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center order-last order-lg-first">
            <img src="/assets/img/adopte-1.png" alt="A la carte" className="img-fluid"/>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mobile-home order-first order-lg-last">
            <div id="presentiel" className="anchor"></div>
            <div id="interentreprise" className="anchor"></div>
            <h4>Adopter</h4>
            <p>Trouver, <strong>les meilleurs profils</strong> de plus de 300 étudiants (tous cycles) inscrit. Votre plan de développement de compétences est sur mesure et vous permet de maîtriser votre budget.</p>
          </div>
        </div>
      </div>

  

      <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div className="row bloc-produit">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 mobile-home col-xl-7">
            <div id="intraentreprise" className="anchor"></div>
            <h4>Validation</h4>
            <p>Nous mettons en avant <strong> les valeurs de votre entreprise </strong> pour attirer les meilleurs profils</p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center">
            <img src="/assets/img/adopte-2.png" alt="Abonnement" className="img-fluid"/>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div className="row bloc-produit">
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center order-last order-lg-first">
            <img src="/assets/img/adopte-3.png" alt="A la carte" className="img-fluid"/>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 col-xl-7 mobile-home order-first order-lg-last">
            <div id="presentiel" className="anchor"></div>
            <div id="interentreprise" className="anchor"></div>
            <h4>Entretien / Test technique</h4>
            <p>pour s'assurer que les candidats possèdent les connaissances et les compétences nécessaires pour réussir dans le rôle pour lequel ils postulent.<strong>tres efficace</strong></p>
            <p> Mieux comprendre les motivations et les aspirations des candidats, ainsi que leur personnalité et leur capacité à s'intégrer à l'équipe.  permettre aux candidats de poser des questions sur l'entreprise et le poste, et de mieux comprendre les exigences et les attentes liées au poste. <strong> Obtenir une image complète du candidat</strong></p>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div className="row bloc-produit">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 mobile-home col-xl-7">
            <div id="intraentreprise" className="anchor"></div>
            <h4>Contrat</h4>
            <p>définit les termes et les conditions d'un accord entre deux ou plusieurs parties. Il peut être utilisé pour formaliser une variété de types d'accords, tels que les contrats de travail, les contrats d'achat ou de vente, les contrats de location ou de prestation de services. Les contrats contiennent généralement des informations sur les obligations et les responsabilités des parties, les paiements et les modalités de résiliation.</p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center">
            <img src="/assets/img/adopte-4.png" alt="Abonnement" className="img-fluid"/>
          </div>
        </div>
      </div>



      <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div className="row bloc-produit">
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center order-last order-lg-first">
            <img src="/assets/img/adopte-5.png" alt="A la carte" className="img-fluid"/>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 mobile-home col-xl-7 order-first order-lg-last">
            <div id="presentiel" className="anchor"></div>
            <div id="interentreprise" className="anchor"></div>
            <h4>Suivi</h4>
            <p>Nous offrons un suivi personnalisé pour chaque étudiant, afin de les aider à atteindre leur plein potentiel. Notre équipe dédiée suit chaque étudiant tout au long de leur parcours, en fournissant un encadrement et des ressources adaptées à leurs besoins individuels. Nous sommes fiers de voir nos étudiants réussir et atteindre leurs objectifs professionnels grâce à notre programme de suivi attentif.</p>
          </div>
        </div>
      </div>


      <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-xl-10 offset-xl-1">
        <div className="row bloc-produit">
          <div className="col-12 col-sm-12 col-md-12 col-lg-7 mobile-home col-xl-7">
            <div id="intraentreprise" className="anchor"></div>
            <h4>Historique</h4>
            <p> L'historique permet d'avoir une visibilité complète de toutes les activités liées aux étudiants, ce qui est très utile pour  <strong>la direction des ressources humaines</strong> de l'entreprise qui suit l'étudiant..</p>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-5 col-xl-5 text-center">
            <img src="/assets/img/adopte-6.png" alt="Abonnement" className="img-fluid"/>
          </div>
        </div>
      </div>

      <section class="section-3">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Pour les étudiants</h2>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-xl-3">
              <a href="/monter-en-competence">
                <img src="/assets/img/icone-montee-competence.jpg" alt="Monter en compétence" class="mx-auto d-block img-fluid img-hover" width="188" height="225"/>
                <p>Monter en compétences</p>
              </a>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-xl-3">
              <a href="/business">
                <img src="/assets/img/icone-business.jpg" alt="Former mes équipes" class="mx-auto d-block img-fluid img-hover" width="188" height="225"/>
                <p>Travailler en équipe</p>
              </a>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-xl-3">
              <a href="/trouver-un-job">
                <img src="/assets/img/icone-job.jpg" alt="Trouver un job" class="mx-auto d-block img-fluid img-hover" width="188" height="225"/>
                <p>Trouver<br/>un stage</p>
              </a>
            </div>
            <div class="col-6 col-sm-6 col-md-3 col-xl-3">
              <a href="/alternance">
                <img src="/assets/img/icone-alternance.jpg" alt="Me former en alternance" class="mx-auto d-block img-fluid img-hover" width="188" height="225"/>
                <p>Trouver une alternance</p>
              </a>
            </div>
        </div>
    </div>
</section>


    </div>
  )
}

export default HomeComponent
