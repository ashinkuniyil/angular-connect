import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faVideo,
  faPhoneAlt,
  faSmile,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';
import { FormControl } from '@angular/forms';
import { DataStore } from '../../utilities/data-store';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
})
export class UserChatComponent implements OnInit {
  faUser = faUser;
  faVideo = faVideo;
  faPhoneAlt = faPhoneAlt;
  faSmile = faSmile;
  faPaperclip = faPaperclip;
  dataStore: DataStore;
  floatLabelControl = new FormControl('auto');
  constructor() {
    this.dataStore = DataStore.getInstance();
  }

  ngOnInit(): void {}
}
