import { Component, OnInit } from '@angular/core';
import { GUIDE_DETAILS } from 'src/assets/mock/guides-details';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-guide-detail',
  templateUrl: './guide-detail.component.html',
  styleUrls: ['./guide-detail.component.scss']
})

export class GuideDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) {}

  private guides = GUIDE_DETAILS;
  public guide;
  public nextGuide = null;
  public GUIDE_ID;

  ngOnInit(): void {
    try {
      // Testa se ID é convertivel para Number
      if (!/^\d+$/.test(this.route.snapshot.paramMap.get("id")))
        throw new Error();
    } catch {
      console.error("O valor passado de parametro provavelmente não é um número válido. Irá redirecionar para HOME");
      this.router.navigate(['home']);
    }

    this.GUIDE_ID = parseFloat(this.route.snapshot.paramMap.get("id"));

    // Carrega o Guia
    this.loadGuide();
  }

  loadGuide(){
    const GUIDE_ID = this.GUIDE_ID;


    if (GUIDE_ID > 8) {
      this.router.navigate(['home']); // Apenas um fallback se o ID for maior que 8. (Não temos ainda mais do que 8 guides)
    }

    // Itera guides, atribui guide de acordo com o ID atual e seleciona o próximo guide
    for (let i in this.guides) {
      if (this.guides[i].id === GUIDE_ID) {
        this.guide = this.cloneObject(this.guides[i]);

        if (GUIDE_ID < 8) {
          const NEXT_GUIDE_ID = parseInt(i) + 1;
          this.nextGuide = this.cloneObject(this.guides[NEXT_GUIDE_ID]);
        } else{
          this.nextGuide = null;
        }
      }
    }
  }

  goToNextGuide(id, el){
    this.router.navigate([`guia/${id}`]);
    this.GUIDE_ID = id;
    this.loadGuide();
    this.scrollToElement(el)
    document.querySelector('audio').src= this.guide.audio;
  }

  cloneObject(src) {
    return JSON.parse(JSON.stringify(src));
  }

  scrollToElement(el): void {
    setTimeout(() => {
      el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }, 100);
  }

  shareGuide(type){
    if(type === "facebook"){
      let w = 630;
      let h = 360;

      let left = screen.width/2 - 630/2;
      let top = screen.height/2 - 360/2;

      window.open(`
      http://www.facebook.com/sharer.php?u=https://www.guiacovid19.com.br/%23/home`,
      'Compartilhar no facebook', 'toolbar=no, location=no, directories=no, status=no, ' + 'menubar=no, scrollbars=yes, resizable=no, copyhistory=no, width='+w+ ', height=' + h + ', top=' + top + ', left=' + left);
    } else {
      window.open(`https://wa.me/?text=Olha só que matéria legal que eu vi no portal do Guia COVID-19 sobre ${this.guide.title}: https://www.guiacovid19.com.br/%23/guia/${this.GUIDE_ID}`)
    }
  }
}
