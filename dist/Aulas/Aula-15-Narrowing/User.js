function handle(user) {
    if (!user)
        return;
    user.id.toUpperCase();
    user.name.toUpperCase();
    if (user.nickname) {
        user.nickname.toUpperCase();
    }
}
handle();
export {};
