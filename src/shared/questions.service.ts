import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

// import{ Question } from './Questions'

@Injectable()
export class QuestionsService {

    ref: AngularFireList<any>;
    answersRef: AngularFireList<any>;
    questions: Observable<any>;

    constructor(public db: AngularFireDatabase) {
        this.ref = db.list('questions');
        this.answersRef = db.list('answers');
        this.questions = this.answersRef.snapshotChanges().map(cambios =>{
            return cambios.map(cambio => ({ key: cambio.payload.key, ...cambio.payload.val()}));
        });
    }
    
    getQuestions(): Observable<any> {
        return this.questions;
    }

    // updateQuestion(key; string, question: Question) {
    //     this.answersRef.update(key, { question: question.question, likes: question.likes});
    // }

    updateNivel(key: string, nuevoNivel: string) {
        this.ref.update(key, {nivel: nuevoNivel})
    }

    addQuestion(descriptionQuestion: string) {
        this.ref.push({description: descriptionQuestion, nivel: 'principiante'});
    }

    addAnswer(alternative: string, question: string, user: string) {
        this.answersRef.push({alternative:alternative, question: question, user:user});
    }

    agregarRespuestaTest(alternative: string, question: string, userId: string) {
    this.db.list('user/' + userId+ '/test').push({question: question, answer: alternative})
    }
}