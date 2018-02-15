import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentUserId = 1;
  conversation = [
    {
      text: 'Hello good morning',
      date: new Date(),
      user: {
        id: 2,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Paco'
      }
    },
    {
      text: 'Hi!',
      date: new Date(),
      user: {
        id: 1,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben'
      }
    },
    {
      text: 'Hello good morning',
      date: new Date(),
      user: {
        id: 2,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Paco'
      }
    },
    {
      text: 'Hi!',
      date: new Date(),
      user: {
        id: 1,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben'
      }
    },
    {
      text: 'Hello good morning',
      date: new Date(),
      user: {
        id: 2,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Paco'
      }
    },
    {
      text: 'Hi!',
      date: new Date(),
      user: {
        id: 1,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben'
      }
    }
  ];

  sendMessage(text) {
    this.conversation.push({
      text: text,
      date: new Date(),
      user: {
        id: this.currentUserId,
        imageUrl: 'http://via.placeholder.com/100x100',
        name: 'Ruben'
      }
    });
  }
}
