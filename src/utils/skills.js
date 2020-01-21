import SkillCategories from '../constants/SkillCategories';
import {SkillsListFull} from '../constants/SkillsList';

const getSkillCategoryColor = (category ?: String | undefined, skill ?: Object | undefined) => {
    let color = '#fff';

    if (skill) {
        if (skill.category != null) {
            category = skill.category;
        }
    }

    if (category) {
        SkillCategories.forEach(function(skillCat, i) {
            if (skillCat.category === category) color = skillCat.color;
        });
    }
    
    return color;
}

const getSkillCategory = (skill : String) => {
    let category = false;

    SkillsListFull.forEach(function(skillObj, i) {
        if (skillObj.name === skill) category = skillObj.category;
    });

    return category;
}

const getSkillColor = (skill : String) => {
    let color = '#fff';

    let category = getSkillCategory(skill);
    if (category) color = getSkillCategoryColor(category);
    return color;
}

export { getSkillCategoryColor, getSkillCategory, getSkillColor };