import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { AnimeserviceService } from '../animeservice.service';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  title = 'AnimeHome';
 
  animes:any;

  episode:any;
  animename:any;
constructor(private anime:AnimeserviceService)
{

}

  getAllAnime(){
    const obs = this.anime.getAllAnime();

    obs.subscribe((res)=>{
     
      this.animes=res;
      console.log(this.animes);
    })
  }

  ngOnInit(): void {
  }

  // myFunction(){

  // }
  Insert(){
    let data={
      animeName:this.animename,
      episodes:this.episode
    }
    const obs=this.anime.insert(data);
    obs.subscribe((res)=>{
      console.log(res);
    })
  }

}
