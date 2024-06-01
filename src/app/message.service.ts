import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: Array<string> = [];

  add(message: string) {
    this.messages.push(message);
  }

  remove(id: number, event: Event): void {
    if (this.messages.length - 1 != 0) {
      event.stopPropagation();
    }
    this.messages.splice(id, 1); // Can't use delete since it doesn't remove the entry, it just undefines it
  }

  clear() {
    this.messages = [];
  }
}