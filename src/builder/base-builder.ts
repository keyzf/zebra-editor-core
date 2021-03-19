import StructureType from "../const/structure-type";
import { headerType } from "../components/header";
import { listType } from "../components/list";

export interface mapData {
  [key: string]: any;
}

abstract class BaseBuilder<T = any> {
  constructor() {
    this.init();
  }

  init() {}

  abstract buildArticle(
    id: string,
    getChildren: () => T[],
    style: mapData,
    data: mapData,
  ): T;

  abstract buildCustomerCollection(
    id: string,
    tag: string,
    getChildren: () => T[],
    style: mapData,
    data: mapData,
  ): T;

  abstract buildTable(
    id: string,
    getChildren: () => T[],
    style: mapData,
    data: mapData,
  ): T;

  abstract buildTableRow(
    id: string,
    getChildren: () => T[],
    style: mapData,
    data: mapData,
  ): T;

  abstract buildTableCell(
    id: string,
    cellType: "th" | "td",
    getChildren: () => T[],
    style: mapData,
    data: mapData,
  ): T;

  abstract buildList(
    id: string,
    listType: listType,
    getChildren: () => T[],
    style: mapData,
    data: mapData,
  ): T;

  abstract buildListItem(list: T, structureType: StructureType): T;

  abstract buildParagraph(
    id: string,
    getChildren: () => T[],
    style: mapData,
    data: mapData,
  ): T;

  abstract buildHeader(
    id: string,
    type: headerType,
    getChildren: () => T[],
    style: mapData,
    data: mapData,
  ): T;

  abstract buildCodeBlock(
    id: string,
    content: string,
    language: string,
    style: mapData,
    data: mapData,
  ): T;

  abstract buildeImage(
    id: string,
    src: string,
    style: mapData,
    data: mapData,
  ): T;

  abstract buildeAudio(
    id: string,
    src: string,
    style: mapData,
    data: mapData,
  ): T;

  abstract buildeVideo(
    id: string,
    src: string,
    style: mapData,
    data: mapData,
  ): T;

  abstract buildCharacterList(
    id: string,
    charList: string,
    style: mapData,
    data: mapData,
  ): T;

  abstract buildInlineImage(
    id: string,
    src: string,
    style: mapData,
    data: mapData,
  ): T;
}

export default BaseBuilder;
