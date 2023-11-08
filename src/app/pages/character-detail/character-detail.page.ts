import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.page.html',
  styleUrls: ['./character-detail.page.scss'],
})
export class CharacterDetailPage implements OnInit {
  characterId: string = '';
  character = null as any;

  constructor(
    private actRoute: ActivatedRoute,
    private rickAMortySvc: RickAndMortyService) {
    //Obtenemos el id atraves de la ruta
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string;
    console.log(this.characterId);
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getCharacter();
  }

  getCharacter(){

    this.rickAMortySvc.getCharacterById(this.characterId).subscribe({
      next: (res: any) =>{
        this.character = res;
        console.log(res);
      },
      error: (error: any) => {
        
      }
    })
  }

}
