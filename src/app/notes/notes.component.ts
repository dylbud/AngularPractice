import { Component, OnInit, TemplateRef } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

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
  modalRef: BsModalRef;
  form: FormGroup;
  subject = new FormControl('', Validators.required);
  showEditButton = false;
  body = new FormControl('', Validators.required);
  editingIndex: number;

  notes: Note[];

  constructor(fb: FormBuilder, private modalService: BsModalService) {
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
    this.notes.unshift(newNote);
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
    this.notes = [];
    this.setStorage();
    this.modalRef.hide();
    this.clearForm();
  }

  delete(index: number) {
    this.notes.splice(index, 1);
    this.setStorage();
    this.modalRef.hide();
    this.clearForm();
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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline() {
    this.modalRef.hide();
  }
}
