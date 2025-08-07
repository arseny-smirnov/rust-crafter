import {
    Drawer, Typography, IconButton, Box, List, ListItem, ListItemText, TextField
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import type { CraftItem } from "../data/types.ts";

interface SidebarCartProps {
    open: boolean;
    items: Record<string, { item: CraftItem; quantity: number }>;
    onQuantityChange: (itemName: string, newQuantity: number) => void;
    onRemoveItem: (itemName: string) => void;
    onClose: () => void;
    resources: Record<string, number>;
}

const SidebarCart: React.FC<SidebarCartProps> = ({
                                                     open,
                                                     items,
                                                     onQuantityChange,
                                                     onRemoveItem,
                                                     onClose,
                                                     resources
                                                 }) => {
    return (
        <Drawer anchor="right" open={open} onClose={onClose}>
            <Box sx={{ width: 300, p: 2 }}>
                <Typography variant="h6" gutterBottom>
                    Корзина
                </Typography>
                <List>
                    {Object.entries(items).map(([name, { item, quantity }]) => (
                        <ListItem key={name}>
                            <ListItemText
                                primary={`${item.name}`}
                                secondary={
                                    <TextField
                                        type="number"
                                        label="Количество"
                                        value={quantity}
                                        size="small"
                                        onChange={(e) => onQuantityChange(name, parseInt(e.target.value))}
                                        sx={{ mt: 1 }}
                                    />
                                }
                            />
                            <IconButton onClick={() => onRemoveItem(name)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ mt: 2 }}>
                    <Typography variant="h6">Ресурсы:</Typography>
                    {Object.entries(resources).map(([res, qty]) => (
                        <Box key={res} sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            <img src={`src/components/resources/${res}.png`} alt={res} width={24} height={24} style={{ marginRight: 8 }} />
                            <Typography>{res}: {qty}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Drawer>
    );
};

export default SidebarCart;
