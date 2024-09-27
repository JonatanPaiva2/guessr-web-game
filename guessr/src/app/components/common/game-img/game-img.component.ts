import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-img.component.html',
  styleUrl: './game-img.component.css'
})

export class GameImgComponent {
  @Input() ImageUrl!: string; // Propriedade de entrada para a URL da imagem
  @Input() lives: number = 4; // Número inicial de vidas
  @Input() guessedCorrectly: boolean = false; // Estado inicial de acerto

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['ImageUrl']) {
      console.log('ngOnChanges:', this.ImageUrl);
    }
  }
}