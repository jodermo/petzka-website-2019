import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Config } from './app.config';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  config = Config;
  texts = Config.texts;
  languages = Config.languages;
  currentLanguage = this.languages[0];
  errorData: {};
  contents = Config.startPage.contents;
  currentContent;
  currentCustomer;
  currentLink;

  constructor(private http: Http, private sanitizer: DomSanitizer) {
    if (localStorage.getItem('currentLanguage')) {
      this.setLanguage(localStorage.getItem('currentLanguage'));
    }
    if (localStorage.getItem('currentContent')) {
      this.showContentByAlias(localStorage.getItem('currentContent'));
    }
    // this.currentCustomer = localStorage.getItem('currentCustomer');
  }

  destroy() {

  }

  print(){
    window.print();
  }

  width() {
    return window.innerWidth;
  }

  height() {
    return window.innerHeight;
  }

  mobileWidth() {
    return (this.width() <= 420);
  }

  tabletWidth() {
    return (this.width() <= 1024);
  }

  desktopWidth() {
    return (this.width() <= 1920);
  }

  ultraHdWidth() {
    return (this.width() <= 2200);
  }

  portrait() {
    return (this.width() <= this.height());
  }

  landscape() {
    return (this.width() > this.height());
  }

  showContentByAlias(alias: string) {
    const aliasElements = this.contents.filter(elm => elm.alias === alias);
    if (aliasElements.length) {
      this.currentContent = aliasElements[0];
      return;
    }
    this.currentContent = null;
  }

  showContent(content: any) {
    this.currentContent = content;
    if (this.tabletWidth()) {
      this.scrollToId('showBox', 50);
    }
    localStorage.setItem('currentContent', this.currentContent.alias);
  }

  showCustomer(customer: any) {
    this.currentCustomer = customer;
    if (this.tabletWidth()) {
      this.scrollToId('showBox', 50);
    }
    localStorage.setItem('currentCustomer', this.currentCustomer.name);
  }

  showLink(link: any) {
    this.currentLink = link;
    if (this.tabletWidth()) {
      this.scrollToId('showBox', 50);
    }
    localStorage.setItem('currentLink', this.currentLink);
  }

  text(object: any, language = this.currentLanguage) {
    if (object && object[language.alias]) {
      if (object && object[language.alias]) {
        return object[language.alias];
      }
    } else if (object.length) {
      return object[0];
    }
    return '';
  }


  scrollToId(id: string, delay: number = 0) {
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({block: 'start', behavior: 'smooth'});
    }, delay);

  }

  textSnippet(alias: string) {
    if (this.currentLanguage && this.currentLanguage.alias) {
      for (const text of this.texts) {
        if (text.alias === alias) {
          if (text[this.currentLanguage.alias]) {
            return text[this.currentLanguage.alias];
          } else if (text[1]) {
            return text[1];
          }
        }
      }
    }
    return alias;
  }

  setLanguage(alias: string = this.currentLanguage.alias) {
    localStorage.setItem('currentLanguage', alias);
    for (const lang of this.languages) {
      if (lang.alias === alias) {
        this.currentLanguage = lang;
      }
    }
  }

  aliasObjects(objects: any[], alias: string, key: string = 'alias') {
    return objects.filter(obj => obj[key] && obj[key] === alias);
  }

  contactForm(data: any) {
    return this.postJSON('php/sendMail.php', data);
  }

  secureURL(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  private postJSON(source, data): Observable<any> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this.http.post(source, data, options)
      .map((res: any) => {
        return res.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    return throwError(error);
  }

}
