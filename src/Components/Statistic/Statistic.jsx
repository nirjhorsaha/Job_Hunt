import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "As-1",
        Marks: 57,
        id: 1
    },
    {
        name: "As-2",
        Marks: 59,
        id: 2
    },
    {
        name: "As-3",
        Marks: 48,
        id: 3
    },
    {
        name: "As-4",
        Marks: 60,
        id: 4
    },
    {
        name: "As-5",
        Marks: 60,
        id: 5
    },
    {
        name: "As-6",
        Marks: 55,
        id: 6
    },
    {
        name: "As-7",
        Marks: 60,
        id: 7
    },
    {
        name: "As-8",
        Marks: 54,
        id: 8
    }
];

const getIntroOfPage = (label) => {
    if (label === "As-1") {
        return "Assignment-1";
    }
    if (label === "As-2") {
        return "Assignment-2";
    }
    if (label === "As-3") {
        return "Assignment-3";
    }
    if (label === "As-4") {
        return "Assignment-4";
    }
    if (label === "As-5") {
        return "Assignment-5";
    }
    if (label === "As-6") {
        return "Assignment-6";
    }
    if (label === "As-7") {
        return "Assignment-7";
    }
    if (label === "As-8") {
        return "Assignment-8";
    }
    return "";
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip ">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="intro">{getIntroOfPage(label)}</p>
            </div>
        );
    }
    return null;
};

export default function App() {
    return (
        <BarChart
            width={1000}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 20,
                left: 20,
                bottom: 5
            }} className="mx-auto"
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="Marks" barSize={20} fill="#8884d8" />
        </BarChart>
    );
}
