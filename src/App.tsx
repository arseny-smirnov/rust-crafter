import React, { useEffect, useState } from "react";
import { Container, Typography, Grid, TextField, Button, MenuItem } from "@mui/material";
import ItemCard from "./components/ItemCard";
import SidebarCart from "./components/SidebarCart";
import { items } from "./data/items.ts";
import { sendCraftRequest } from "./utils/EmailService";
import type { CraftItem } from "./data/types.ts";

const App: React.FC = () => {
    const [filter, setFilter] = useState("");
    const [search, setSearch] = useState("");
    const [cart, setCart] = useState<Record<string, { item: CraftItem; quantity: number }>>({});
    const [userName, setUserName] = useState("");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleItemInCart = (item: CraftItem) => {
        setCart(prev => {
            if (prev[item.name]) {
                // Если есть — удалить
                const copy = { ...prev };
                delete copy[item.name];
                return copy;
            } else {
                // Если нет — добавить с количеством 1
                return {
                    ...prev,
                    [item.name]: { item, quantity: 1 }
                };
            }
        });
    };

    const removeItem = (name: string) => {
        setCart(prev => {
            const copy = { ...prev };
            delete copy[name];
            return copy;
        });
    };

    const changeQuantity = (name: string, qty: number) => {
        if (qty <= 0) removeItem(name);
        else setCart(prev => ({ ...prev, [name]: { ...prev[name], quantity: qty } }));
    };

    const calculateResources = () => {
        const res: Record<string, number> = {};
        Object.values(cart).forEach(({ item, quantity }) => {
            Object.entries(item.resources).forEach(([key, val]) => {
                res[key] = (res[key] || 0) + val * quantity;
            });
        });
        return res;
    };

    const handleSend = async () => {
        await sendCraftRequest(userName, cart);
        localStorage.clear();
        setCart({});
        setUserName("");
    };

    useEffect(() => {
        const saved = localStorage.getItem("cart");
        const name = localStorage.getItem("userName");
        if (saved) setCart(JSON.parse(saved));
        if (name) setUserName(name);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("userName", userName);
    }, [cart, userName]);

    const filteredItems = items.filter(i =>
        i.name.toLowerCase().includes(search.toLowerCase()) &&
        (!filter || i.category === filter)
    );

    const resources = calculateResources();
    const categories = Array.from(new Set(items.map(i => i.category)));

    return (
        <Container sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom>Предметы Rust</Typography>
            <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField fullWidth label="Поиск" value={search} onChange={e => setSearch(e.target.value)} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <TextField select fullWidth label="Категория" value={filter} onChange={e => setFilter(e.target.value)}>
                        <MenuItem value="">Все</MenuItem>
                        {categories.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}
                    </TextField>
                </Grid>
                {/*<Grid size={{ xs: 12, sm: 6, md: 4 }}>*/}
                {/*    <TextField fullWidth label="Имя пользователя" value={userName} onChange={e => setUserName(e.target.value)} />*/}
                {/*</Grid>*/}
            </Grid>
            <Grid container spacing={2}>
                {filteredItems.map(item => (
                    <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.name}>
                        <ItemCard
                            {...item}
                            selected={!!cart[item.name]}
                            onClick={() => toggleItemInCart(item)}
                        />
                    </Grid>
                ))}
            </Grid>
            <Button variant="contained" color="primary" sx={{ mt: 4 }} onClick={() => setSidebarOpen(true)}>
                РАССЧИТАТЬ
            </Button>
            {/*<Button*/}
            {/*    variant="outlined"*/}
            {/*    color="success"*/}
            {/*    sx={{ mt: 4, ml: 2 }}*/}
            {/*    disabled={!Object.keys(cart).length || !userName}*/}
            {/*    onClick={handleSend}*/}
            {/*>*/}
            {/*    Отправить запрос*/}
            {/*</Button>*/}
            <SidebarCart
                open={sidebarOpen}
                items={cart}
                onClose={() => setSidebarOpen(false)}
                onQuantityChange={changeQuantity}
                onRemoveItem={removeItem}
                resources={resources}
            />
        </Container>
    );
};

export default App;
