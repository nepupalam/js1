class Faculty {
    constructor(type, name, features) {
        this.type = type
        this.name = name
        this.features = features

    }
}
function generateFeatures(  price, duration,subtype = undefined, distant = true , correspondence =true, fullTime = true) {
    const features = {}

     features.fullTime = fullTime
    features.correspondence = correspondence
    features.distant = distant
    if (subtype = undefined) {
        features.subtype = subtype
    }
    features.price = price
    features.duration = duration
    return features
}

const obj1 = new Faculty("колледж", "Информационные системы", generateFeatures(40, 3.10, undefined, false ))
const obj2 = new Faculty("колледж", "Банковское дело", generateFeatures(40, 2.10, undefined))
const obj3 = new Faculty("колледж", "Экономика и бухгалтерский учёт", generateFeatures(40, 2.10, undefined))
const obj4 = new Faculty("колледж", "Коммерция", generateFeatures(40, 2.10, undefined))
const obj5 = new Faculty("колледж", "Продавец, контролер-кассир", generateFeatures(40, 0.10, undefined))

const obj6 = new Faculty("Бакалавриат", "История стран Азии и Африки", generateFeatures(98, 4, "Востоковеденье"))
const obj7 = new Faculty("Бакалавриат", "Гражданское право и процесс", generateFeatures(55, 4, "Юриспрудеция"))
const obj8 = new Faculty("Бакалавриат", "Угаловное право и процесс", generateFeatures(55, 4, "Юриспрудеция"))
const obj9 = new Faculty("Бакалавриат", "Перевод и переводоведение", generateFeatures(58, 4, "Лингвистика"))
const obj10 = new Faculty("Бакалавриат", "Иностранный язык", generateFeatures(52, 4, "Педагогические образование"))
const obj11 = new Faculty("Бакалавриат", "Дошкольное образование", generateFeatures(48, 4, "Педагогические образование"))
const obj12 = new Faculty("Бакалавриат", "Физическая культура, спорт и фитнес", generateFeatures(50, 4, "Педагогические образование"))
const obj13 = new Faculty("Бакалавриат", "Сервис машин, оборудования и инженерных систем", generateFeatures(50, 3, "Сервис"))
const obj14 = new Faculty("Бакалавриат", "Прикладная информатика", generateFeatures(55, 4, "Прикладная информатика"))
const obj15 = new Faculty("Бакалавриат", "Финансы и кредит", generateFeatures(50, 4, "Экономика"))
const obj16 = new Faculty("Бакалавриат", "Бухгалтерский учет, анализ и аудит", generateFeatures(50, 4, "Экономика"))
const obj17 = new Faculty("Бакалавриат", "Международный менеджмент", generateFeatures(50, 4, "Менедмент"))
const obj18 = new Faculty("Бакалавриат", "Кадровый менеджмент", generateFeatures(50, 4, "Менедмент"))
const obj19 = new Faculty("Бакалавриат", "Логистика и транспортный менеджмент", generateFeatures(50, 4, "Менедмент"))
const obj20 = new Faculty("Бакалавриат", "Спортивный менеджмент", generateFeatures(50, 4, "Менедмент"))
const obj21 = new Faculty("Бакалавриат", "Эффективное государственное управление", generateFeatures(55, 4, "Государcтвенное и муниципальное управление"))
const obj22 = new Faculty("Бакалавриат", "Реклама и связи с общественностью", generateFeatures(50, 4, "Реклама и связи с общественностью"))
const obj23 = new Faculty("Бакалавриат", "Практическая психология", generateFeatures(58, 4, "Психология"))
const obj40 = new Faculty("Бакалавриат", "Начальное образование", generateFeatures(48, 4, "Педагогические образование"))

const obj24 = new Faculty("Магистратура", "Психологическое консультирование", generateFeatures(55, 2, "Психология"))
const obj25 = new Faculty("Магистратура", "Современная лингвистика и межкультурная коммуникация", generateFeatures(57, 2, "Лингвистика"))
const obj26 = new Faculty("Магистратура", "Современные теории и технологии обучения иностранному языку", generateFeatures(57, 2, "Педагогическое образование"))
const obj27 = new Faculty("Магистратура", "Педагогика в спорте, поиск и развитие талантов", generateFeatures(55, 2, "Педагогическое образование"))
const obj28 = new Faculty("Магистратура", "Бухгалтерский учет и внутренний контроль", generateFeatures(50, 2, "Экономика"))
const obj29 = new Faculty("Магистратура", "Финансовый менеджмент", generateFeatures(50, 2, "Менеджмент"))
const obj30 = new Faculty("Магистратура", "Управление человеческими ресурсами", generateFeatures(50, 2, "Менеджмент"))
const obj31 = new Faculty("Магистратура", "Менеджмент в здравоохранении", generateFeatures(55, 2, "Менеджмент"))
const obj32 = new Faculty("Магистратура", "Стратегический менеджмент в спорте", generateFeatures(55, 2, "Менеджмент"))
const obj33 = new Faculty("Магистратура", "Государственное управление экономическим развитием", generateFeatures(50, 2, "Менеджмент"))

const obj34 = new Faculty("Специалитет", "Патопсихологическая диагностика и психотерапия", generateFeatures(58, 4.5, "Клиническая психология"))
const obj35 = new Faculty("Специалитет", "Экономическая безопасность", generateFeatures(55, 4.5, "Экономика"))
const obj36 = new Faculty("Специалитет", "Актерское искусство", generateFeatures(50, 4.5, "Актерское искусство", false))



const obj37 = new Faculty("Аспирантура", "Бухгалтерский учет, анализ и аудит", generateFeatures(57, 4.5, ))
const obj38 = new Faculty("Аспирантура", "Информационные технологии и телекоммуникации", generateFeatures(55, 4))
const obj39 = new Faculty("Аспирантура", "Экономический факультет", generateFeatures(55, 4))


function CreateArray() {
    let i = 1
    const array = []
    while (i != 0) {
        try {
            array.push(eval("obj" + i))
            i++
        } catch (error) {
            return array
        }
    }
}

const  ObjArray = CreateArray()

export {ObjArray}