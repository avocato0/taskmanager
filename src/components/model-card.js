import { parseDate } from "./utils";

export class ModelCard {
  constructor(data) {
    this.id = data[`id`];
    this.description = data[`description`] || ``;
    this.dueDate = new Date(data[`due_date`]);
    this.dueTime = parseDate(this.dueDate);
    this.tags = new Set(data[`tags`] || []);
    this.repeatingDays = data[`repeating_days`];
    this.color = data[`color`];
    this.isFavorite = Boolean(data[`is_favorite`]);
    this.isArchive = Boolean(data[`is_archived`]);
  }

  static parseCard(data) {
    return new ModelCard(data);
  }

  static parseCards(data) {
    return data.map((card) => ModelCard.parseCard(card));
  }

  // prettier-ignore
  toRAW() {
    return {
      "id": this.id,
      "description": this.description,
      "due_date": this.dueDate,
      "tags": [...this.tags.values()],
      "is_favorite": this.isFavorite,
      "is_archived": this.isArchive,
      "color": this.color,
      "repeating_days": this.repeatingDays
    };
  }
}
