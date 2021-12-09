// users-filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/user.model';

@Pipe({name: 'userFilter'})
export class UserFilterPipe implements PipeTransform {


  transform(users: User[], filterText: string): User[] {
    if (!users) {
      return [];
    }
    if (!filterText) {
      return users;
    }

    return users.filter(user => {
      return this.userContainsFilterText(user, filterText);
    });
  }

  private userContainsFilterText(user: User, filterText): boolean {
    filterText = filterText.toLocaleLowerCase();
    const filterTerms = filterText.split(' ');
    for (const filterTerm of filterTerms) {
      const hasFilterTerm = this.userContainsFilterTerm(user, filterTerm);
      if (hasFilterTerm === false) {
        return false;
      }
    }

    return true;
  }

  private tagsHaveFilterText(tags: string[], filterText: string): boolean {
    for (const tag of tags) {
      if (tag.includes(filterText)) {
        return true;
      }
    }

    return false;
  }

  // tslint:disable-next-line:typedef
  private userContainsFilterTerm(user: User, filterTerm: string) {
    return user.name.toLocaleLowerCase().includes(filterTerm);
  }
}
