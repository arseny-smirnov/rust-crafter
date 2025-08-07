import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

interface ItemCardProps {
    name: string;
    category: string;
    image: string;
    selected: boolean;
    onClick: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, category, image, selected, onClick }) => {
    return (
        <Card
            onClick={onClick}
            sx={{ border: selected ? '2px solid #1976d2' : '1px solid #ccc', marginBottom: 2 }}
        >
            <CardActionArea>
                <CardMedia component="img" height="100" image={image} alt={name} sx={{ width: 'auto', margin: '0 auto' }} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {category}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
};

export default ItemCard;