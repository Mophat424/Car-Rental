import { Request, Response } from 'express';
import { getMaintenances, createMaintenance, updateMaintenance, deleteMaintenance } from './maintenanceService';

export const getMaintenancesHandler = async (req: Request, res: Response) => {
    const maintenances = await getMaintenances();
    res.status(200).json(maintenances);
};

export const createMaintenanceHandler = async (req: Request, res: Response) => {
    const { carID, maintenanceDate, description, cost } = req.body;
    const maintenance = await createMaintenance({ carID, maintenanceDate, description, cost });
    res.status(201).json([maintenance]);
};

export const updateMaintenanceHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const maintenance = await updateMaintenance(Number(id), req.body);
    res.status(200).json([maintenance]);
};

export const deleteMaintenanceHandler = async (req: Request, res: Response) => {
    const { id } = req.params;
    const maintenance = await deleteMaintenance(Number(id));
    res.status(200).json({ message: 'Maintenance deleted', maintenance });
};