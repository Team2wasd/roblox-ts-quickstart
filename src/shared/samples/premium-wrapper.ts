import PremiumWrapper from "@rbxts/premium-wrapper";
const wrapper = new PremiumWrapper(); // Creates connections, returns the wrapper

wrapper.BindOnPremiumJoin((player) => {
	print(wrapper.PlayerIsPremium(player)); // Always true

	// Etc
});
