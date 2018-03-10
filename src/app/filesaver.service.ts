import { Injectable } from '@angular/core';
import { RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { getFileNameFromResponseContentDisposition, saveFile } from './file-downloader';

@Injectable()
export class FileService {
    constructor(private http: HttpClient,
    ) {}

    downloadFile() {
        const url = 'http://localhost:8080/api/pdf';
         const headers = new HttpHeaders();
          //  headers.append('Accept', 'application/pdf');
         // Process the file downloaded
        this.http.get(url, {observe: 'response', responseType: 'blob'}).subscribe(res => {
            const fileName = getFileNameFromResponseContentDisposition(res);
            saveFile(res.body, fileName);
        });
    }
}
