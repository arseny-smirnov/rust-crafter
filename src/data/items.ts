import type { CraftItem } from "./types.ts";
import ammoPistol from '../assets/ammo.pistol.png'
import ammoRifle from '../assets/ammo.rifle.png'
import ammoRifleExplosive from '../assets/ammo.rifle.explosive.png'
import pistolSemiAuto from '../assets/pistol.semiauto.png'
import rifleSemiAuto from '../assets/rifle.semiauto.png'
import smgThompson from '../assets/smg.thompson.png'
import rifleAk from '../assets/rifle.ak.png'
import ladder from '../assets/ladder.wooden.wall.png'
import barricade from '../assets/barricade.wood.cover.png'
import garageDoor from '../assets/wall.frame.garagedoor.png'
import hatchet from '../assets/hatchet.png'
import pickaxe from '../assets/pickaxe.png'
import axe from '../assets/axe.salvaged.png'
import icepick from '../assets/icepick.salvaged.png'
import syringeMedical from '../assets/syringe.medical.png'
import doubleDoor from '../assets/door.double.hinged.metal.png'

export const items: CraftItem[] = [
    {
        name: "Пистолетный патрон",
        category: "Патроны",
        image: ammoPistol,
        resources: {
            "металл": 10,
            "порох": 5
        }
    },
    {
        name: "Патрон 5.56-мм",
        category: "Патроны",
        image: ammoRifle,
        resources: {
            "металл": 10,
            "порох": 5
        }
    },
    {
        name: "Патрон 5.56-мм (Разрывной)",
        category: "Патроны",
        image: ammoRifleExplosive,
        resources: {
            "металл": 10,
            "порох": 20,
            "сера": 10
        }
    },
    {
        name: "Полуавтоматический пистолет",
        category: "Оружие",
        image: pistolSemiAuto,
        resources: {
            "полуавтоматический корпус": 1,
            "мвк": 4,
            "труба": 1
        }
    },
    {
        name: "Полуавтоматическая винтовка / Берданка",
        category: "Оружие",
        image: rifleSemiAuto,
        resources: {
            "полуавтоматический корпус": 1,
            "мвк": 4,
            "металл": 450,
            "пружина": 1
        }
    },
    {
        name: "Томпсон",
        category: "Оружие",
        image: smgThompson,
        resources: {
            "смг корпус": 1,
            "мвк": 10,
            "дерево": 100,
            "пружина": 1
        }
    },
    {
        name: "Штурмовая винтовка / АК-47 / Калаш",
        category: "Оружие",
        image: rifleAk,
        resources: {
            "штурмовой корпус": 1,
            "мвк": 50,
            "дерево": 200,
            "пружина": 4
        }
    },
    {
        name: "Деревянная лестница",
        category: "Строительство",
        image: ladder,
        resources: {
            "дерево": 300,
            "веревка": 3
        }
    },
    {
        name: "Деревянная стенка",
        category: "Строительство",
        image: barricade,
        resources: {
            "дерево": 250,
        }
    },
    {
        name: "Гаражная дверь",
        category: "Строительство",
        image: garageDoor,
        resources: {
            "металл": 300,
            "шестеренка": 2
        }
    },
    {
        name: "Двойная металлическая дверь",
        category: "Строительство",
        image: doubleDoor,
        resources: {
            "металл": 200
        }
    },
    {
        name: "Топор",
        category: "Инструменты",
        image: hatchet,
        resources: {
            "металл": 75,
            "дерево": 100
        }
    },
    {
        name: "Кирка",
        category: "Инструменты",
        image: pickaxe,
        resources: {
            "металл": 125,
            "дерево": 100
        }
    },
    {
        name: "МВК Топор",
        category: "Инструменты",
        image: axe,
        resources: {
            "труба": 1,
            "лезвие": 5
        }
    },
    {
        name: "Ледоруб",
        category: "Инструменты",
        image: icepick,
        resources: {
            "труба": 1,
            "лезвие": 5
        }
    },
    {
        name: "Шприц",
        category: "Медицина",
        image: syringeMedical,
        resources: {
            "ткань": 15,
            "металл": 10,
            "тнк": 10
        }
    },
];
