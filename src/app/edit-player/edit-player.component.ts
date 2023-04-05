import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss']
})
export class EditPlayerComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>,) {

  }

allProfilePicture = ['profile-men.jpg', '14625742.jpg', 'profile-men1.jpg', 'profile-women.png', 'prifile-women2.jpg', 'profile-women1.avif'];

ngOnInit(): void {
this.selectPicture();
}

selectPicture() {

}

}
