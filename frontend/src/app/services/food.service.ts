import { Tag } from './../shared/models/Tag'
import { sample_foods, sample_tags } from './../../data'
import { Food } from './../shared/models/Food'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() {}

  getAll(): Food[] {
    return sample_foods
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter(food =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  getAllTags(): Tag[] {
    return sample_tags
  }

  getAllFoodsByTag(tag: string): Food[] {
    if (tag == 'All') {
      return this.getAll()
    }
    return this.getAll().filter(food => food.tags?.includes(tag))
  }

  getFoodById(foodId: string): Food {
    return this.getAll().find(food => food.id == foodId) ?? new Food()
  }
}
