import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

export class Note {
  subject: string;
  body: string;
}

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
})
export class NotesComponent implements OnInit {
  form: FormGroup;
  subject = new FormControl('', Validators.required);
  showEditButton = false;
  body = new FormControl('', Validators.required);
  editingIndex: number;

  notes: Note[];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      subject: this.subject,
      body: this.body,
    });
  }

  onSubmit() {
    const newNote: Note = {
      subject: this.subject.value,
      body: this.body.value,
    };
    this.notes.push(newNote);
    this.setStorage();
    this.clearForm();
  }

  ngOnInit() {
    if (window.localStorage.getItem('notes')) {
      this.notes = JSON.parse(window.localStorage.getItem('notes'));
    } else {
      this.notes = [];
    }
  }

  setStorage() {
    window.localStorage.setItem('notes', JSON.stringify(this.notes));
    this.showEditButton = false;
  }

  clearAllNotes() {
    if (
      confirm('Are you sure you want to permanently delete all your notes?')
    ) {
      this.notes = [];
      this.setStorage();
      this.clearForm();
    }
  }

  delete(index: number) {
    if (confirm('Are you sure you want to delete this note?')) {
      this.notes.splice(index, 1);
      this.setStorage();
    }
  }

  selectNoteToEdit(index: number) {
    this.editingIndex = index;
    this.subject.setValue(this.notes[index].subject);
    this.body.setValue(this.notes[index].body);
    this.showEditButton = true;
  }

  clearForm() {
    this.form.reset();
    this.showEditButton = false;
  }

  edit() {
    this.notes[this.editingIndex].subject = this.subject.value;
    this.notes[this.editingIndex].body = this.body.value;
    this.setStorage();
    this.showEditButton = false;
    this.clearForm();
  }
}
