module portfolio::profile {

    use std::string::String;
    use sui::object::UID;
    use sui::transfer;
    use sui::tx_context::TxContext;

    /// On-chain profile object
    public struct Profile has key {
        id: UID,
        name: String,
        bio: String,
        sui_focus: String,
    }

    /// Create and share a profile object
    public fun create_profile(
        name: String,
        bio: String,
        sui_focus: String,
        ctx: &mut TxContext
    ) {
        let profile = Profile {
            id: sui::object::new(ctx),
            name,
            bio,
            sui_focus,
        };

        transfer::share_object(profile);
    }

    /// Read-only helpers (used by indexers / SDKs)
    public fun get_name(p: &Profile): &String {
        &p.name
    }

    public fun get_bio(p: &Profile): &String {
        &p.bio
    }

    public fun get_sui_focus(p: &Profile): &String {
        &p.sui_focus
    }
}
