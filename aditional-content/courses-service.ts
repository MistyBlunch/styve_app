// @Injectable()
// export class CoursesService {
//     cursos = [];

//     ref: AngularFireList<any>;
//     courses: Observable<any>;

//     constructor(public db: AngularFireDatabase) {
//         this.ref = db.list('cursos');
//         this.courses = this.ref.snapshotChanges().map(cambios =>{
//             return cambios.map(cambio => ({ key: cambio.payload.key, ...cambio.payload.val()}));
//         });
//     }
    
//     public getCourses(): Observable<any> {
//         return this.courses;
//     }

// // add for me
//     //alterno
//     public getCourse(key) {
//         return this.courses.filter(function(e, i) { return e.key == key }) [0] || {};
//     }   

// // esta es una prueba

//     public getCursos() {
//         return this.db.list('cursos/');
//     }

//     public getCurso(key) {
//         return this.db.object('cursos/' + key);
//     }

//     public createCurso(curso) {
//         this.db.database.ref('cursos/'+curso.key).set(curso);
//     }

//     public editCurso(curso) {
//         this.db.database.ref('cursos/'+curso.key).set(curso);
//     }

//     public deleteCurso(curso) {
//         this.db.database.ref('cursos/'+curso.key).remove();
        // for(let i = 0; < this.cursos.length; i++) {
        //     if(this.cursos[i].key = curso.key) {
        //         this.cursos.slice(i, 1);
        //     }
        // }
    // }