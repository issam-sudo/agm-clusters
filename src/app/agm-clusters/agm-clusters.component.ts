import { Component, OnInit } from '@angular/core';
import { ClusterIconStyle, MarkerClustererOptions } from '@google/markerclustererplus';
import markerData from '../data/markerData.json';
import { clusterOptions } from "../models/clusterOptions.model";
@Component({
  selector: 'app-agm-clusters',
  templateUrl: './agm-clusters.component.html',
  styleUrls: ['./agm-clusters.component.scss']
})
export class AgmClustersComponent implements OnInit {

  title = 'agmCluster';
  zoom: number = 1;
  markers: any = markerData;
  index2: number = 0;

  getGoogleClusterInlineSvg = function (color: string) {
    var encoded = window.btoa('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-100 -100 200 200"><defs><g id="a" transform="rotate(45)"><path d="M0 47A47 47 0 0 0 47 0L62 0A62 62 0 0 1 0 62Z" fill-opacity="0.7"/><path d="M0 67A67 67 0 0 0 67 0L81 0A81 81 0 0 1 0 81Z" fill-opacity="0.5"/><path d="M0 86A86 86 0 0 0 86 0L100 0A100 100 0 0 1 0 100Z" fill-opacity="0.3"/></g></defs><g fill="' + color + '"><circle r="42"/><use xlink:href="#a"/><g transform="rotate(120)"><use xlink:href="#a"/></g><g transform="rotate(240)"><use xlink:href="#a"/></g></g></svg>');

    return ('data:image/svg+xml;base64,' + encoded);
  };


  clusterStyles: ClusterIconStyle[] = [
    {
      textColor: "#FFFFFF",
      url: this.getGoogleClusterInlineSvg('blue'),
      height: 150,
      width: 58
    },
    {
      textColor: "#FFFFFF",
      url: this.getGoogleClusterInlineSvg('violet'),
      height: 150,
      width: 58
    },

    {
      textColor: "#FFFFFF",
      url: this.getGoogleClusterInlineSvg('yellow'),
      height: 150,
      width: 58
    }
  ];
  clusterOptions: clusterOptions;

  constructor() {
    this.clusterOptions = {
      gridSize: 60,
      minimumClusterSize: 2,
      averageCenter: true
    };

  }
  ngOnInit() {


  } 
  //Calculate Function - to show image em formatted text
  calculateFunction(markers: any, numStyle: number) {

    let index: number = 0
    let title: string = "first";
    let text: string = "<div > <div >{{ELEMENTS}}</div> </div>";
    let qtdNodes: number = 0;
    let qtdEvents: number = 0;
    console.log(qtdEvents)

    console.log(markers.length, numStyle)


    if (markers.length == 23) {

      index = 2

    } else if (markers.length == 2) {

      index = 3

    } else {

      index = 1

    }

    text = text.replace("{ELEMENTS}", markers.length);


    return {
      text: text,
      index: index,
      title: title
    }
  }

}
