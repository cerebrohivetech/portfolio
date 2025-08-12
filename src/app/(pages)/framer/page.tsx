"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function FramerExample() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [rotate, setRotate] = useState(0);

    return (
        <main className="flex h-[70vh] gap-30 bg-white p-10">
            <motion.div
                className="h-50 w-50 rounded-4xl bg-amber-300"
                animate={{ x, y, rotate }}
                transition={{
                    duration: 4,
                    bounce: 1,
                }}
            ></motion.div>

            <div className="flex flex-col gap-10">
                <div>
                    <label htmlFor="x">X</label>
                    <input
                        type="text"
                        className="mt-4 block rounded border bg-gray-500 p-2"
                        placeholder="Enter X"
                        onChange={(e) =>
                            setX(
                                Number.isNaN(parseInt(e.target.value))
                                    ? 0
                                    : parseInt(e.target.value)
                            )
                        }
                    />
                </div>
                <div>
                    <label htmlFor="y">Y</label>
                    <input
                        type="text"
                        className="mt-4 block rounded border bg-gray-500 p-2"
                        placeholder="Enter Y"
                        onChange={(e) =>
                            setY(
                                Number.isNaN(parseInt(e.target.value))
                                    ? 0
                                    : parseInt(e.target.value)
                            )
                        }
                    />
                </div>
                <div>
                    <label htmlFor="rotate">Rotate</label>
                    <input
                        type="text"
                        className="mt-4 block rounded border bg-gray-500 p-2"
                        placeholder="Enter Rotate"
                        onChange={(e) =>
                            setRotate(
                                Number.isNaN(parseInt(e.target.value))
                                    ? 0
                                    : parseInt(e.target.value)
                            )
                        }
                    />
                </div>
            </div>
        </main>
    );
}
