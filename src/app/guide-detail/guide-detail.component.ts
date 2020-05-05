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
  public nextGuide;

  ngOnInit(): void {
    try {
      // Testa se ID é convertivel para Number
      if (!/^\d+$/.test(this.route.snapshot.paramMap.get("id")))
        throw new Error()
    } catch {
      console.error("O valor passado de parametro provavelmente não é um número válido. Irá redirecionar para HOME")
      this.router.navigate(['home'])
    }

    const GUIDE_ID = parseFloat(this.route.snapshot.paramMap.get("id"))

    if (GUIDE_ID > 8)
      this.router.navigate(['home']) // Apenas um fallback se o ID for maior que 10. (Não temos ainda mais do que 10 guides)

    // Itera guides, atribui guide de acordo com o ID atual e seleciona o próximo guide
    for (let i in this.guides) {
      if (this.guides[i].id === GUIDE_ID) {
        this.guide = this.guides[i]

        if (GUIDE_ID < 8)
          this.nextGuide = this.guides[i + 1]
      }
    }
  }

}
