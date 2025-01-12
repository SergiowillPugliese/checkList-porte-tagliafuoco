import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyCYXphliWB4Jnz9CEYGLejJU8i-gd0fzTc',
  authDomain: 'checklist-porte-tagliafuoco.firebaseapp.com',
  projectId: 'checklist-porte-tagliafuoco',
  storageBucket: 'checklist-porte-tagliafuoco.firebasestorage.app',
  messagingSenderId: '309733437254',
  appId: '1:309733437254:web:2d56d98bca0bf2ff05ff47',
  measurementId: 'G-P8G9F5HHW3',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tabs/tabs.module').then((m) => m.TabsPageModule),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
