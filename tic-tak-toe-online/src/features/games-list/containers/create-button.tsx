'use client'

import {Button} from "@/shared/ui/button";
import { CreateGameAction } from "../actions/create-game";
import { useActionState } from "@/shared/lib/react";
import { mapLeft, right } from "@/shared/lib/either";
import { startTransition } from "react";


export function CreateButton(){
    const [state, dispatch, isPending] = useActionState(
        CreateGameAction, 
        right(undefined)
    )
    return (
            <Button
            disabled={isPending} 
            onClick={() => startTransition(dispatch)} 
            error = {mapLeft(
                state,
                (e) => 
                ({
                    ["can-create-only-one-game"]: "You can create only one game",
                    ["user-not-found"]: "User doesn't exist",
                })[e]
            )}
            >
            Create game
            </Button>        
    );
}